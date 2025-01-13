import Job from '../models/jobModel';

export class JobService {
    async createJob(job: Partial<Job>): Promise<Job> {
        return await Job.create(job);
    }

    async getAllJobs(): Promise<Job[]> {
        return await Job.findAll();
    }

    async getJobById(id: number): Promise<Job | null> {
        return await Job.findByPk(id);
    }

    async updateJob(id: number, job: Partial<Job>): Promise<[number]> {
        return await Job.update(job, { where: { id } });
    }

    async deleteJob(id: number): Promise<number> {
        return await Job.destroy({ where: { id } });
    }
}