import { useState, useCallback } from "react";
import ReactConfetti from "react-confetti";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Confetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = useCallback(() => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Confetti Celebration</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button onClick={handleConfetti} className="bg-blue-500 hover:bg-blue-600 text-white">
            Celebrate!
          </Button>
        </CardContent>
      </Card>
      {isConfettiActive && <ReactConfetti />}
    </div>
  );
};

export default Confetti;
