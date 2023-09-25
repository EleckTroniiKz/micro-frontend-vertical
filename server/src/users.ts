export interface User {
  id: number;
  name: string;
  gender: string;
  height: string;
  country: string;
}

const users: User[] = [
  {
    id: 0,
    name: 'John Doe',
    gender: 'Male',
    height: '175',
    country: 'USA',
  },
  {
    id: 1,
    name: 'Jane Smith',
    gender: 'Female',
    height: '162',
    country: 'Canada',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    gender: 'Male',
    height: '180',
    country: 'UK',
  },
  {
    id: 3,
    name: 'Emily Davis',
    gender: 'Female',
    height: '160',
    country: 'Australia',
  },
  {
    id: 4,
    name: 'Michael Wilson',
    gender: 'Male',
    height: '170',
    country: 'Germany',
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    gender: 'Female',
    height: '165',
    country: 'USA',
  },
  {
    id: 6,
    name: 'David Lee',
    gender: 'Male',
    height: '178',
    country: 'Canada',
  },
  {
    id: 7,
    name: 'Sophia Kim',
    gender: 'Female',
    height: '163',
    country: 'UK',
  },
  {
    id: 8,
    name: 'Daniel Garcia',
    gender: 'Male',
    height: '175',
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Olivia Brown',
    gender: 'Female',
    height: '168',
    country: 'Germany',
  },
];

export default users;
