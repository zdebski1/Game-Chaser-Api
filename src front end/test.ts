import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const App = () => {
  const [stadiums, setStadiums] = useState([]);
  const [visitData, setVisitData] = useState({ stadiumId: "", comment: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch stadiums from the backend
    axios
      .get("/stadium")
      .then((response) => {
        setStadiums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stadiums:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVisitData({ ...visitData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post visit data to the backend
    axios
      .post("/visits", visitData)
      .then((response) => {
        setMessage("Visit successfully logged!");
        setVisitData({ stadiumId: "", comment: "" });
      })
      .catch((error) => {
        console.error("Error posting visit:", error);
        setMessage("Failed to log visit.");
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Stadium Visits Tracker</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Available Stadiums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stadiums.map((stadium) => (
            <Card key={stadium.id} className="shadow-md">
              <CardContent>
                <h3 className="font-bold text-lg">{stadium.name}</h3>
                <p className="text-sm text-gray-600">{stadium.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-2">Log a Visit</h2>

        <div className="mb-4">
          <label htmlFor="stadiumId" className="block mb-1 font-medium">
            Select Stadium
          </label>
          <select
            id="stadiumId"
            name="stadiumId"
            value={visitData.stadiumId}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">-- Select a Stadium --</option>
            {stadiums.map((stadium) => (
              <option key={stadium.id} value={stadium.id}>
                {stadium.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block mb-1 font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={visitData.comment}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <Button type="submit" className="w-full">
          Submit Visit
        </Button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default App;
