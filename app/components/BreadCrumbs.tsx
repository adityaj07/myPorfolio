// import { FC } from "react";
// import Link from 'next/link';
// // import clsx from 'clsx';


// interface BreadCrumbsProps {
//   label: string;
//   href: string;
//   active?: boolean;
// }

// const BreadCrumbs: FC<BreadCrumbsProps> = ({ label, href, active }) => {
//   return (
//     <nav aria-label="Breadcrumb" className="mb-6 block">
//       <ol className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>
//         {breadcrumbs.map((breadcrumb, index) => (
//           <li
//             key={breadcrumb.href}
//             aria-current={breadcrumb.active}
//             className={clsx(
//               breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
//             )}
//           >
//             <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
//             {index < breadcrumbs.length - 1 ? (
//               <span className="mx-3 inline-block">/</span>
//             ) : null}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// };

// export default BreadCrumbs;


import { clsx } from 'clsx';
import Link from 'next/link';


interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx('flex text-lg md:text-xl ')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-white' : 'text-gray-500',
            "text-sm md:text-lg")}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
