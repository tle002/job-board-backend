// filepath: /g:/DJ Archieve/Desktop/Projects/job-board-backend/src/routes/jobRoutes.ts
import { Router, Request, Response } from 'express';
import JobController from '../controllers/jobController';
import { JobService } from '../services/jobService';

const router = Router();
const jobService = new JobService();
const jobController = new JobController(jobService);

const setJobRoutes = (app: any) => {
    app.get('/', (req: Request, res: Response) => {
        res.redirect('/api-docs');
    });
    app.use('/jobs', router);


    /**
     * @swagger
     * /jobs:
     *   post:
     *     summary: Create a new job
     *     tags: [Jobs]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Job'
     *     responses:
     *       201:
     *         description: Job created successfully
     *       500:
     *         description: Internal server error
     */
    router.post('/', (req, res) => jobController.createJob(req, res));

    /**
     * @swagger
     * /jobs:
     *   get:
     *     summary: Get all jobs
     *     tags: [Jobs]
     *     responses:
     *       200:
     *         description: A list of jobs
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Job'
     *       500:
     *         description: Internal server error
     */
    router.get('/', (req, res) => jobController.getAllJobs(req, res));

    /**
     * @swagger
     * /jobs/{id}:
     *   get:
     *     summary: Get a job by ID
     *     tags: [Jobs]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: The job ID
     *     responses:
     *       200:
     *         description: Job found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Job'
     *       404:
     *         description: Job not found
     *       500:
     *         description: Internal server error
     */
    router.get('/:id', (req, res) => jobController.getJobById(req, res));

    /**
     * @swagger
     * /jobs/{id}:
     *   put:
     *     summary: Update a job by ID
     *     tags: [Jobs]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: The job ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Job'
     *     responses:
     *       200:
     *         description: Job updated successfully
     *       404:
     *         description: Job not found
     *       500:
     *         description: Internal server error
     */
    router.put('/:id', (req, res) => jobController.updateJob(req, res));

    /**
     * @swagger
     * /jobs/{id}:
     *   delete:
     *     summary: Delete a job by ID
     *     tags: [Jobs]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: The job ID
     *     responses:
     *       204:
     *         description: Job deleted successfully
     *       404:
     *         description: Job not found
     *       500:
     *         description: Internal server error
     */
    router.delete('/:id', (req, res) => jobController.deleteJob(req, res));
};

export default setJobRoutes;
