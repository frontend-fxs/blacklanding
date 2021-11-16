interface ITestimonialData {
  id: number;
  name: string;
  date: string;
  comment: string;
  description: string;
}

export const TestimonialData: ITestimonialData[] = [
  {
    id: 1,
    name: 'Ed Igho',
    date: 'April 8, 2021',
    comment: '“Up to date info about the financial and economic world.”',
    description:
      'One has to decipher and make your own decision based on the facts. The onus ultimately depends on you and how you interpret the news.',
  },
  {
    id: 2,
    name: 'Edwar Sabogal',
    date: 'June 6, 2021',
    comment: '“Recommended”',
    description:
      'The most relevant news of the FX industry at hand, excellent group of analysts, recommended',
  },
  {
    id: 3,
    name: 'Matt Kraus',
    date: 'July 18, 2021',
    comment: '“I do like the service & have no complaints” ',
    description:
      'I do like the service & have no complaints, would highly recommend you to others but I have no time for trading at the moment.',
  },
];
