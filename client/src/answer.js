export default function calculateNextReview() {
  const intervals = [
    1, // Review after 1 minute
    10, // Review after 10 minutes
    60, // Review after 1 hour
    120, // Review after 2 hours
    240, // Review after 4 hours
    480, // Review after 8 hours
    960, // Review after 16 hours
    1920, // Review after 32 hours
    3840, // Review after 64 hours
    7680, // Review after 128 hours
  ];

  // const interval = intervals;
  // const currentDate = new Date();
  // const nextReviewDate = new Date(currentDate.getTime() + interval * 60 * 1000);
  // return nextReviewDate;
}
