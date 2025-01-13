export interface Job {
    id?: number;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

export interface JobRequest {
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

export interface JobResponse {
    job: Job;
}

export interface JobListResponse {
    jobs: Job[];
}