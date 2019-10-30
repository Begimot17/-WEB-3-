const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('WEBTEX', 'root', '', {
    dialect: 'mysql'
  })
  
  const Group = sequelize.define('Groups', {
    group: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  
const Student = sequelize.define('Students', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.DATE,
    allowNull: false
  },

});


Student.create({
    'name': 'Dmitriy',
    'age': new Date(2000,10,10),
    'idGroup':1
})
.then(created => {
    console.log(`Id of created student ${created.id}`)
})
.catch(err => {
    console.log(err);
});

Student.findByPk(3)
.then(student => {
    console.log(`Student with id 1 has name: ${student.name}`)
})
.catch(err => {
    console.log(err);
})

Student.findAll()
.then(students => {
    students.forEach(student => {
        console.log(`Student id:${student.id} name:${student.name} age:${student.age}`);
    });
})
.catch(err => {
    console.log(err);
});

const Op = Sequelize.Op;
//Update
Student.findOne({
    where: {
        name: {
         [Op.or]: ['Nikita']
        }
    }
})
.then(student => {
    student.update({
        name: 'Nikita',
    })
    .then(updated => {
        console.log(`Updated student name:${updated.name}`);
    })
    .catch(err => {
        console.log(err);
    });
})
.catch(err => {
    console.log(err);
});
// Delete
Student.findOne({
  where: {
      name: 'notNikita'
  }
})
.then(student => {
  student.destroy()
  .then(destroyed => {
      console.log(`Destroyed student name:${destroyed.name}`);
  })
  .catch(err => {
      console.log(err);
  });
})
.catch(err => {
  console.log(err);
});