import Link from "next/link";
import { HiChevronRight, HiHome } from "react-icons/hi";

interface Breadcrumb {
  readonly label: string;
  readonly href?: string;
}

interface PageHeaderProps {
  readonly title: string;
  readonly subtitle: string;
  readonly backgroundImage: string;
  readonly breadcrumbs?: readonly Breadcrumb[];
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section
      className='relative py-24 md:py-32 text-center text-white overflow-hidden'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${backgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      <div className='container mx-auto px-4 relative z-10'>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className='flex items-center justify-center gap-2 text-sm text-white/80 mb-6'>
            <Link
              href='/'
              className='flex items-center gap-1 hover:text-white transition-colors'>
              <HiHome className='w-4 h-4' />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className='flex items-center gap-2'>
                <HiChevronRight className='w-4 h-4 text-white/50' />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className='hover:text-white transition-colors'>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className='text-white font-medium'>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className='font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg'>
          {title}
        </h1>
        <p className='text-lg md:text-xl max-w-2xl mx-auto text-white/90'>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
