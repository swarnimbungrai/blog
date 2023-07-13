module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define("blogs", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    });
    return blog;
  };
  