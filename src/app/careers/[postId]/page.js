import { notFound } from 'next/navigation';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import PageHeader from '../../../components/ui/PageHeader';
import Container from '../../../components/ui/Container';
import Section from '../../../components/ui/Section';
import Button from '../../../components/ui/Button';
import { findJobByPostId } from '../../../data/jobs';

export async function generateMetadata({ params }) {
  const { postId } = await params;
  const job = findJobByPostId(postId);

  if (!job) {
    return {
      title: 'Job Not Found | Nomad Express Group Careers',
      description: 'The job posting you are looking for could not be found.',
    };
  }

  return {
    title: `${job.title} | Nomad Express Group Careers`,
    description: `${job.title} in ${job.location}. ${job.salary}. Apply to join Nomad Express Group.`,
    openGraph: {
      title: `${job.title} | Nomad Express Group Careers`,
      description: `${job.title} in ${job.location}. ${job.salary}.`,
    },
  };
}

export default async function CareerPostPage({ params }) {
  const { postId } = await params;
  const job = findJobByPostId(postId);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Section background="dark" className="pt-32 pb-20">
        <div className="absolute inset-0 bg-black/70"></div>
        <Container className="relative z-10">
          <PageHeader
            title={job.title}
            subtitle={`${job.company} · ${job.location} · ${job.salary}`}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button href={`/apply?job=${job.id}`} variant="primary" size="lg">
              Apply Now
            </Button>
            <Button href="/careers" variant="secondary" size="lg">
              Back to Careers
            </Button>
          </div>
        </Container>
      </Section>

      <div className="bg-gradient-to-b from-black via-gray-900 to-black">
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-lg px-6 pb-8 pt-6 space-y-8">
              <section>
                <h2 className="text-lg font-semibold text-white mb-3">About the Job</h2>
                <p className="text-gray-300 leading-relaxed">{job.about}</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Duties</h2>
                <ul className="space-y-4">
                  {job.duties.map((duty, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3 text-gray-300">
                        <span className="text-red-500 mt-1 shrink-0" aria-hidden="true">▸</span>
                        <span className="leading-relaxed">{duty.text}</span>
                      </div>
                      {duty.subItems && (
                        <ul className="mt-2 ml-7 space-y-1">
                          {duty.subItems.map((sub, j) => (
                            <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                              <span className="text-red-500/60 mt-1 shrink-0" aria-hidden="true">–</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-red-500 mt-1 shrink-0" aria-hidden="true">✓</span>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Location</h2>
                <p className="text-gray-300 leading-relaxed">{job.locationDetail}</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">How to Apply</h2>
                <p className="text-gray-300 leading-relaxed mb-5">{job.applyInstructions}</p>
                <Button href={`/apply?job=${job.id}`} variant="primary" size="md">
                  Submit Application
                </Button>
              </section>
            </div>
          </Container>
        </section>
      </div>

      <Footer />
    </div>
  );
}
