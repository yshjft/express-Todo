module.export=(sequelize, DataTypes)=>{
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
    }
  },{
    timestamps : true,
  })
};