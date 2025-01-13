// filepath: /g:/DJ Archieve/Desktop/Projects/job-board-backend/src/routes/jobRoutes.ts
import { Router } from 'express';
import JobController from '../controllers/jobController';
import { JobService } from '../services/jobService';

const router = Router();
const jobService = new JobService();
const jobController = new JobController(jobService);

const setJobRoutes = (app: any) => {
    app.use('/jobs', router);

    router.post('/', (req, res) => jobController.createJob(req, res));
    router.get('/', (req, res) => jobController.getAllJobs(req, res));
    router.get('/:id', (req, res) => jobController.getJobById(req, res));
    router.put('/:id', (req, res) => jobController.updateJob(req, res));
    router.delete('/:id', (req, res) => jobController.deleteJob(req, res));
};

export default setJobRoutes;
//post request not workig