export const barangays = [
  'Apokon',
  'Bincungan',
  'Busaon',
  'Canocotan',
  'Cuambogan',
  'La Filipina',
  'Liboganon',
  'Madaum',
  'Magugpo East',
  'Magugpo North',
  'Magugpo Poblacion',
  'Magugpo South',
  'Magugpo West',
  'Mankilam',
  'New Balamban',
  'Nueva Fuerza',
  'Pagsabangan',
  'Pandapan',
  'San Agustin',
  'San Isidro',
  'San Miguel',
  'Visayan Village'
]

export const drivers = [
  {
    id: 'D-1021',
    name: 'Arvin Dela Cruz',
    plate: 'TAG-4312',
    status: 'Available',
    verified: true,
    rating: 4.8,
    safetyScore: 92,
    barangay: 'Magugpo East',
    tricycle: 'Honda TMX 125',
    years: 6,
    incidents: 1,
    avatarColor: 'from-emerald-400 to-emerald-700',
    emergencyContact: 'Tagum City PNP',
    contactNumber: '0917-432-8871',
    history: ['2024: Top Safety Performer', '2023: Zero incident record']
  },
  {
    id: 'D-1188',
    name: 'Janice Lumang',
    plate: 'TAG-1188',
    status: 'On Ride',
    verified: true,
    rating: 4.6,
    safetyScore: 88,
    barangay: 'Apokon',
    tricycle: 'Yamaha Sight',
    years: 4,
    incidents: 0,
    avatarColor: 'from-emerald-300 to-emerald-500',
    emergencyContact: 'Tagum Emergency Hotline',
    contactNumber: '0908-550-2331',
    history: ['2024: Community Trust Award', '2022: Best in Service']
  },
  {
    id: 'D-2044',
    name: 'Rogelio Manlunas',
    plate: 'TAG-2044',
    status: 'Available',
    verified: false,
    rating: 4.2,
    safetyScore: 78,
    barangay: 'Busaon',
    tricycle: 'Kawasaki Barako',
    years: 3,
    incidents: 2,
    avatarColor: 'from-emerald-400 to-emerald-800',
    emergencyContact: 'Barangay Safety Desk',
    contactNumber: '0921-770-9941',
    history: ['2024: Safety refresh training completed']
  },
  {
    id: 'D-3309',
    name: 'Marianne Obed',
    plate: 'TAG-3309',
    status: 'Offline',
    verified: true,
    rating: 4.9,
    safetyScore: 95,
    barangay: 'Visayan Village',
    tricycle: 'Honda TMX 150',
    years: 8,
    incidents: 0,
    avatarColor: 'from-emerald-200 to-emerald-600',
    emergencyContact: 'Tagum City DRRMO',
    contactNumber: '0919-222-6648',
    history: ['2024: Perfect safety score', '2021: Best driver award']
  }
]

export const reviews = [
  {
    id: 'R-101',
    driverId: 'D-1021',
    name: 'Karla M.',
    rating: 5,
    comment: 'Very calm driver and keeps passengers updated on routes.',
    date: '2026-05-02'
  },
  {
    id: 'R-102',
    driverId: 'D-1188',
    name: 'Luis P.',
    rating: 4,
    comment: 'On time and respectful. Tricycle is clean.',
    date: '2026-05-06'
  },
  {
    id: 'R-103',
    driverId: 'D-3309',
    name: 'Mina Q.',
    rating: 5,
    comment: 'Helpful with safety reminders and polite.',
    date: '2026-05-08'
  }
]

export const incidents = [
  {
    id: 'I-202',
    driverId: 'D-2044',
    category: 'Speeding',
    location: 'Mankilam',
    date: '2026-04-11',
    status: 'Reviewed'
  },
  {
    id: 'I-208',
    driverId: 'D-1021',
    category: 'Improper loading',
    location: 'Magugpo West',
    date: '2026-03-18',
    status: 'Resolved'
  }
]

export const notifications = [
  {
    id: 'N-001',
    title: 'Barangay Advisory',
    message: 'Temporary reroute near San Miguel due to roadworks until May 20.',
    type: 'alert',
    date: '2026-05-15',
    read: false
  },
  {
    id: 'N-002',
    title: 'Driver Update',
    message: 'Driver D-1188 has completed the latest safety refresher.',
    type: 'update',
    date: '2026-05-12',
    read: true
  },
  {
    id: 'N-003',
    title: 'Community Announcement',
    message: 'New passenger waiting zones now active in Apokon and La Filipina.',
    type: 'community',
    date: '2026-05-10',
    read: false
  }
]

export const rideHistory = [
  {
    id: 'RH-8891',
    driverId: 'D-1021',
    origin: 'Magugpo East',
    destination: 'Tagum City Hall',
    date: '2026-05-13 08:20',
    fare: 55,
    status: 'Completed'
  },
  {
    id: 'RH-8897',
    driverId: 'D-1188',
    origin: 'Apokon',
    destination: 'Gaisano Mall',
    date: '2026-05-11 19:45',
    fare: 60,
    status: 'Completed'
  },
  {
    id: 'RH-8902',
    driverId: 'D-3309',
    origin: 'Visayan Village',
    destination: 'Tagum Bus Terminal',
    date: '2026-05-09 14:10',
    fare: 70,
    status: 'Completed'
  }
]

export const emergencyHotlines = [
  { id: 'E-01', name: 'Tagum City DRRMO', number: '911-Tagum' },
  { id: 'E-02', name: 'Tagum City PNP', number: '0908-111-2233' },
  { id: 'E-03', name: 'Tagum City Fire Station', number: '0917-008-7788' }
]

export const familyMembers = [
  {
    id: 'F-01',
    name: 'Anna Dela Cruz',
    relation: 'Mother',
    status: 'Live tracking active'
  },
  {
    id: 'F-02',
    name: 'Mark Dela Cruz',
    relation: 'Father',
    status: 'Receives route updates'
  },
  {
    id: 'F-03',
    name: 'Jessa Dela Cruz',
    relation: 'Sister',
    status: 'Emergency contact enabled'
  }
]

export const safetyUpdates = [
  {
    id: 'S-01',
    title: 'Share your route',
    detail: 'Tell a trusted family member your pickup and drop-off points before boarding.'
  },
  {
    id: 'S-02',
    title: 'Keep distance from traffic',
    detail: 'Wait on the sidewalk and allow the driver to stop safely before approaching.'
  },
  {
    id: 'S-03',
    title: 'Check driver ID',
    detail: 'Always confirm the tricycle ID and plate number match your ride details.'
  }
]

export const analyticsStats = [
  { name: 'Mon', rides: 42 },
  { name: 'Tue', rides: 58 },
  { name: 'Wed', rides: 64 },
  { name: 'Thu', rides: 52 },
  { name: 'Fri', rides: 71 },
  { name: 'Sat', rides: 88 },
  { name: 'Sun', rides: 46 }
]
