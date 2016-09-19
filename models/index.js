const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

var Player = db.define('player',{
	name:{
		type: Sequelize.STRING,
		allowNull:false,
	}
})

var Team = db.define('team',{
	teamName:{
		type: Sequelize.STRING,
		allowNull: false,
	}
})

Player.belongsTo(Team);
Team.hasMany(Player);

module.exports = {
	models:{
		Player: Player,
		Team: Team,
		db: db,
	},
	sync: function(){
		return db.sync({force:true});
	}

};
