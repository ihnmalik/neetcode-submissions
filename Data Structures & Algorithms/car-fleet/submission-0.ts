class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
   carFleet(target: number, position: number[], speed: number[]): number {
        // Keep each car's position and speed together
        const cars = position
            .map((pos, i) => ({
                position: pos,
                speed: speed[i],
            }))
            .sort((a, b) => a.position - b.position);

        let fleets = 0;
        let lastFleetArrivalTime = 0;

        // Process from the car closest to the target
        for (let i = cars.length - 1; i >= 0; i--) {
            const { position, speed } = cars[i];

            // Time this car would take if it drove alone
            const arrivalTime = (target - position) / speed;

            // Can't catch the fleet ahead -> forms a new fleet
            if (arrivalTime > lastFleetArrivalTime) {
                fleets++;
                lastFleetArrivalTime = arrivalTime;
            }

            // Otherwise:
            // arrivalTime <= lastFleetArrivalTime
            // It catches the fleet ahead, so do nothing.
        }

        return fleets;
    }
}
