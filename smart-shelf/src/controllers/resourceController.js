const db = require('../config/db');

const getResourcesBySubject = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        console.log('Fetching resources for subject:', subjectId);

        const sql = `
            SELECT resource_id, title, resource_type, file_path
            FROM resources
            WHERE subject_id = ?
        `;

        const [results] = await db.query(sql, [subjectId]);

        console.log('Resources fetched successfully:', results.length);

        return res.json(results);
    } catch (err) {
        console.error('Error fetching resources:', err.message);

        return res.status(500).json({
            message: 'Failed to fetch resources',
            error: err.message
        });
    }
};

module.exports = { getResourcesBySubject };