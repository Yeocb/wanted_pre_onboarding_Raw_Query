const { AppDataSource } = require("../models/dataSource");

const postJobPost = async ( compaines_id, country, location, position, skill, compensation, description ) => {
	try {
		return await AppDataSource.query(
			    `INSERT INTO job_posting(
                    compaines_id, 
                    country, 
                    location, 
                    position, 
                    skill, 
                    compensation, 
                    description
			    ) VALUES (?, ?, ?, ?, ?, ?, ?);
			    `, [compaines_id, country, location, position, skill, compensation, description ]
			  )
	} catch (err) {
		const error = new Error('INVALID_DATA_INPUT');
		error.statusCode = 500;
		throw error;
	};
};

module.exports = {
	postJobPost,
}