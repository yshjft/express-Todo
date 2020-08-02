module.exports=(sequelize, DataTypes)=>{
  return sequelize.define('todo',{
    title:{
      type:DataTypes.STRING(20),
      allowNull: false,
    },
    date:{
      type:DataTypes.DATE,
      allowNull: false,
    },
    text:{
      type:DataTypes.STRING(100),
      allowNull: false,
    },
    priority:{
      type : DataTypes.INTEGER,
      defaultValue:1, //1은 안급합, 2는 급함
    },
    complete:{
      type: DataTypes.INTEGER,
      defaultValue:0, //1은 완료, 0은 미완료
    }
  },{
    timestamps : true,
  })
};