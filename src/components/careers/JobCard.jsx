import Button from '../ui/Button';

export default function JobCard({ job }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                Now Hiring
              </span>
              <span className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 rounded-full">
                {job.type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">{job.title}</h3>
            <p className="text-gray-400 text-sm mt-1">
              {job.company} &middot; {job.location}
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-white font-bold text-lg">{job.salary}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mt-4 line-clamp-2 leading-relaxed">{job.about}</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <Button href={`/careers/${job.postId}`} variant="secondary" size="md">
            View Full Job Details
          </Button>
          <Button href={`/apply?job=${job.id}`} variant="primary" size="md">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
