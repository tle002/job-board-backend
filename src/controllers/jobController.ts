// filepath: /g:/DJ Archieve/Desktop/Projects/job-board-backend/src/controllers/jobController.ts
import { Request, Response } from 'express';
import { JobService } from '../services/jobService';

class JobController {
    private jobService: JobService;

    constructor(jobService: JobService) {
        this.jobService = jobService;
    }

    public async createJob(req: Request, res: Response): Promise<void> {
        try {
            const job = await this.jobService.createJob(req.body);
            res.status(201).json(job);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public async getAllJobs(req: Request, res: Response): Promise<void> {
        try {
            const jobs = await this.jobService.getAllJobs();
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public async getJobById(req: Request, res: Response): Promise<void> {
        try {
            const job = await this.jobService.getJobById(parseInt(req.params.id));
            if (job) {
                res.status(200).json(job);
            } else {
                res.status(404).json({ message: 'Job not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public async updateJob(req: Request, res: Response): Promise<void> {
        try {
            const [updated] = await this.jobService.updateJob(parseInt(req.params.id), req.body);
            if (updated) {
                const updatedJob = await this.jobService.getJobById(parseInt(req.params.id));
                res.status(200).json(updatedJob);
            } else {
                res.status(404).json({ message: 'Job not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public async deleteJob(req: Request, res: Response): Promise<void> {
        try {
            const deleted = await this.jobService.deleteJob(parseInt(req.params.id));
            if (deleted) {
                res.status(204).json();
            } else {
                res.status(404).json({ message: 'Job not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default JobController;