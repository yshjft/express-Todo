module.exports=(sequelize, DataTypes)=>{
  return sequelize.define('user',{
    email:{
      type:DataTypes.STRING,
      allowNull : false,
      unique : true,
    },
    nick:{
      type:DataTypes.STRING,
      allowNull :false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    timestamps: true,
  })
};