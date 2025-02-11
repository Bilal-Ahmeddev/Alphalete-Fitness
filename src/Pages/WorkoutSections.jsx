import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dumbbell, Play, Filter, Search } from "lucide-react";

const WorkoutSections = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = [
    {
      id: "chest",
      name: "Chest",
      exercises: [
        {
          name: "Bench Press",
          difficulty: "intermediate",
          duration: "15 min",
          calories: "150",
          equipment: "Barbell",
          videoUrl: "https://www.youtube.com/watch?v=NjzRfBwEDLc",
        },
        {
          name: "Push-Ups",
          difficulty: "beginner",
          duration: "10 min",
          calories: "100",
          equipment: "None",
          videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        },
      ],
    },
    {
      id: "back",
      name: "Back",
      exercises: [
        {
          name: "Pull-Ups",
          difficulty: "intermediate",
          duration: "15 min",
          calories: "140",
          equipment: "Pull-up Bar",
          videoUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
        },
        {
          name: "Deadlifts",
          difficulty: "advanced",
          duration: "20 min",
          calories: "200",
          equipment: "Barbell",
          videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q",
        },
      ],
    },
    {
      id: "legs",
      name: "Legs",
      exercises: [
        {
          name: "Squats",
          difficulty: "intermediate",
          duration: "20 min",
          calories: "180",
          equipment: "Barbell",
          videoUrl: "https://www.youtube.com/watch?v=SW_C1A-rejs",
        },
        {
          name: "Lunges",
          difficulty: "beginner",
          duration: "15 min",
          calories: "120",
          equipment: "None",
          videoUrl: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
        },
      ],
    },
    {
      id: "shoulders",
      name: "Shoulders",
      exercises: [
        {
          name: "Military Press",
          difficulty: "advanced",
          duration: "15 min",
          calories: "140",
          equipment: "Barbell",
          videoUrl: "https://www.youtube.com/watch?v=B-aVuyhvLHU",
        },
        {
          name: "Lateral Raises",
          difficulty: "beginner",
          duration: "12 min",
          calories: "90",
          equipment: "Dumbbells",
          videoUrl: "https://www.youtube.com/watch?v=kDqklk1ZESo",
        },
      ],
    },
    {
      id: "arms",
      name: "Arms",
      exercises: [
        {
          name: "Bicep Curls",
          difficulty: "beginner",
          duration: "12 min",
          calories: "100",
          equipment: "Dumbbells",
          videoUrl: "https://www.youtube.com/watch?v=in7PaeYlhrM",
        },
        {
          name: "Tricep Extensions",
          difficulty: "beginner",
          duration: "12 min",
          calories: "90",
          equipment: "Cable",
          videoUrl: "https://www.youtube.com/watch?v=vB5OHsJfN78",
        },
      ],
    },
  ];

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handlePlayClick = (videoUrl) => {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      navigate(`/video/${videoId}`);
    } else {
      console.error("Invalid video URL:", videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-900/50 to-black p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Workout Library</h1>
          <p className="text-gray-300 text-lg">
            Explore our comprehensive collection of exercises for every muscle group
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search exercises..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-10 text-white focus:outline-none focus:border-red-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Filter className="h-5 w-5 mt-3" />
            {["all", ...categories.map((category) => category.id)].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  selectedCategory === category
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Categories */}
        <div className="space-y-8">
          {categories
            .filter(
              (category) => selectedCategory === "all" || category.id === selectedCategory
            )
            .map((category) => (
              <div key={category.id} className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Dumbbell className="w-6 h-6 mr-2 text-red-500" />
                  {category.name} Exercises
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {category.exercises
                    .filter((exercise) =>
                      exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((exercise, index) => (
                      <div
                        key={index}
                        className="bg-black border border-gray-800 rounded-lg p-4 hover:border-red-500 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">{exercise.name}</h3>
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300"
                            onClick={() => handlePlayClick(exercise.videoUrl)}
                          >
                            <Play className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Exercise Details */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="capitalize text-yellow-500">{exercise.difficulty}</span>
                          </div>

                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center">
                              {exercise.duration}
                            </div>
                            <div className="flex items-center">
                              {exercise.calories} cal
                            </div>
                          </div>

                          <div className="text-sm text-gray-400">
                            Equipment: {exercise.equipment}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutSections;
