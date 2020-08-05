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
    //데이터베이스 문자열 한글 지원
    charset : 'utf8',
    collate : 'utf8_general_ci',
  })
};