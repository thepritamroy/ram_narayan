
export const h_images = ['/hero-image-1.jpg','/hero-image-2.jpg','/hero-image-3.jpg','/hero-image-4.jpg', '/hero-image-5.jpg']


// Gallery
interface Gallery {
  title : string,
  images : string[]
}

export const gallery:Gallery[] = [
  {title : 'bihu', images: ['/jubilee-2.jpg','/jubilee-3.jpg','/jubilee-2.jpg','/jubilee-3.jpg']},

  {title : 'independence day', images: ['/academics-hs.jpg','/academics-primary.jpg','/academics-primary.jpg','/academics-hs.jpg']},

  {title : 'Republic day', images: ['/sports-week.jpg','/academics-primary.jpg','/sports-week.jpg','/academics-hs.jpg']},

  {title : 'Saraswati Puja', images: ['/faculty-image.jpg','/academics-primary.jpg','/sports-week.jpg','/academics-hs.jpg']}
]



// Course of studies
interface Courses {
  name : string,
  images : string
}

export const courses:Courses[] = [
  {name: 'CLASS KG', images: '/class-image.png'},
  {name: 'CLASS I', images: '/class-image.png'},
  {name: 'CLASS II', images: '/class-image.png'},
  {name: 'CLASS III', images: '/class-image.png'},
  {name: 'CLASS Iv', images: '/class-image.png'},
  {name: 'CLASS V', images: '/class-image.png'},
  {name: 'CLASS VI', images: '/class-image.png'},
  {name: 'CLASS VII', images: '/class-image.png'},
  {name: 'CLASS VIII', images: '/class-image.png'},
  {name: 'CLASS IX', images: '/class-image.png'},
  {name: 'CLASS X', images: '/class-image.png'},
  {name: 'CLASS XI (SCIENCE)', images: '/class-image.png'},
  {name: 'CLASS XI (COMMERCE)', images: '/class-image.png'},
  {name: 'CLASS XI (ARTS)', images: '/class-image.png'},
  {name: 'CLASS XII (SCIENCE)', images: '/class-image.png'},
  {name: 'CLASS XII (COMMERCE)', images: '/class-image.png'},
  {name: 'CLASS XII (ARTS)', images: '/class-image.png'},
]



// Classes
export const classes = [
    ['CLASS KG A', 'CLASS KG B'],
    ['CLASS I A', 'CLASS I B', 'CLASS I C'],
    ['CLASS II A', 'CLASS II B', 'CLASS II C'],
    ['CLASS III A', 'CLASS III B', 'CLASS III C'],
    ['CLASS IV A', 'CLASS IV B', 'CLASS IV C'],
    ['CLASS V A', 'CLASS V B', 'CLASS V C'],
    ['CLASS VI A', 'CLASS VI B', 'CLASS VI C', 'CLASS VI D'],
    ['CLASS VII A', 'CLASS VII B', 'CLASS VII C', 'CLASS VII D'],
    ['CLASS VIII A', 'CLASS VIII B', 'CLASS VIII C', 'CLASS VIII D'],
    ['CLASS IX A', 'CLASS IX B', 'CLASS IX C', 'CLASS IX D'],
    ['CLASS X A', 'CLASS X B', 'CLASS X C', 'CLASS X D'],
    ['CLASS XI A (SC)', 'CLASS XI B (SC)', 'CLASS XI A (COM)', 'CLASS XI B (COM)', 'CLASS XI A (ARTS)'],
    ['CLASS XII A (SC)', 'CLASS XII B (SC)', 'CLASS XII A (COM)', 'CLASS XII B (COM)', 'CLASS XII A (ARTS)'],
];



// Facilities
interface Facilities{
  title : string,
  description : string,
  images : string[]
}

export const facilities:Facilities[] = [
  {title: 'Smart Classrooms', description: 'Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Central Library', description: 'A vast collection of books and digital resources. Students can access a wealth of information for their studies. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Chemistry Lab', description: 'Well-equipped lab for practical experiments. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Physics Lab', description: 'Advanced equipment for physics experiments. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Biology Lab', description: 'State-of-the-art lab for biological studies. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Computer Lab', description: 'Equipped with modern computers and software. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'CCTV', description: '24/7 surveillance for safety and security. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Power Backup', description: 'Uninterrupted power supply for all facilities. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Playground', description: 'Spacious outdoor area for sports and recreation. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Indoor Games', description: 'Facilities for various indoor sports and activities. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Auditorium', description: 'A large hall for events and gatherings. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Hostels', description: 'Comfortable accommodation for students. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Fire Extinguishers', description: 'Safety measures in place for emergencies. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Drinking Water', description: 'Clean and safe drinking water facilities. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},

  {title: 'Cafeteria', description: 'Healthy and nutritious meals served daily. Modern classrooms equipped with smart boards and projectors. These advance equipments help students learn effectively and efficiently', images: ['/jubilee-2.jpg', '/jubilee-3.jpg']},
]



// Faculties

// Management team
interface Faculties{
  name : string,
  description : string,
  images : string
}
export const m_faculties:Faculties[] = [
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
]

// Primary school faculty
export const p_faculties:Faculties[] = [
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
]

// Secondary school faculty
export const s_faculties:Faculties[] = [
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
]

//Sr. secondary school faculty
export const ss_faculties:Faculties[] = [
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
  {name: 'MS. JYOTI NATH', description: 'VI, VII, VIII, IX, X - Mathematics, Science', images: '/faculty-image.jpg'},
]


// Achievers

interface Results{
  name: string,
  percentage : Number,
  images: string
}
export const results = [
  // HSLC
  {
    class: 'hslc', 
    toppers: [{name: 'Suraj Baruah', percentage: 90, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 90, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
              {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg'},
            ],
    sub_toppers: [{name: 'Suraj Baruah', percentage: 90, images: '/student-image.jpg', subject: 'English'},
                  {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg', subject: 'Bengali'},
                  {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg', subject: 'Bengali'},
                  {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg', subject: 'Bengali'},
                  {name: 'Suraj Baruah', percentage: 85, images: '/student-image.jpg', subject: 'Hindi'}
            ],
    overall: [{percentage : '90 % & Above', no_of_students: 34},
              {percentage : '80 % to 90 %', no_of_students: 64},
              {percentage : '70 % - 80 %', no_of_students: 24},
              {percentage : '60 % - 69 %', no_of_students: 36},
              {percentage : 'Total', no_of_students : 160},
            ],
    year_wise : [{year:'2019', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'}
              ]
  },

  // HS
  {
    class: 'hs', 
    toppers: [{name: 'Rajib Sarkar', percentage: 90, images: '/student-image.jpg'},
              {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg'},
              {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg'},
              {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg'},
              {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg'}
            ],
    sub_toppers: [{name: 'Rajib Sarkar', percentage: 90, images: '/student-image.jpg', subject: 'English'},
                  {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg', subject: 'Bengali'},
                  {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg', subject: 'Bengali'},
                  {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg', subject: 'Bengali'},
                  {name: 'Rajib Sarkar', percentage: 85, images: '/student-image.jpg', subject: 'Hindi'}
            ],
    overall: [{percentage : '90 % & Above', no_of_students: 34},
              {percentage : '80 % to 90 %', no_of_students: 64},
              {percentage : '70 % - 80 %', no_of_students: 24},
              {percentage : '60 % - 69 %', no_of_students: 36},
              {percentage : 'Total', no_of_students : 160},
            ],
    year_wise : [{year:'2019', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'},
                 {year:'2020', images: '/result-image.jpg'}
              ]
  }

]