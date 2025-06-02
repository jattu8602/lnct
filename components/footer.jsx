// components/Footer.tsx

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const colleges = [
    {
      name: 'Lakshmi Narain College of Technology (LNCT)',
      url: 'https://lnct.ac.in',
    },
    { name: 'JNCT Professional University', url: 'https://jnctpu.edu.in' },
    { name: 'Indore LN Medical College', url: 'https://indorelnmc.com' },
    { name: 'LNCP Bhopal', url: 'https://lncpbhopal.in' },
    { name: 'LNCT Bhopal', url: 'https://lnctbhopal.in' },
    { name: 'LNCT Engineering College', url: 'https://lncte.in' },
    {
      name: 'LNCT Bhopal Indore Campus',
      url: 'https://lnctbplindorecampus.in',
    },
    { name: 'CLC Homeopathy College', url: 'https://clchomeopathy.in' },
    { name: 'LNCT University', url: 'https://lnctu.ac.in' },
    { name: 'JNCT Bhopal', url: 'https://jnctbhopal.ac.in' },
    { name: 'LNCT Vidhyapeeth University', url: 'https://lnctvu.ac.in' },
    { name: 'Jayant Jaggery College', url: 'https://jayantjaggery.com' },
    { name: 'Indore LN Medical College (alt)', url: 'https://indorelnmc.in' },
    { name: 'CEC Bilaspur', url: 'https://cecbilaspur.ac.in' },
    { name: 'LNCT Jabalpur', url: 'https://lnctuj.com' },
    { name: 'LNCT & Science', url: 'https://lncts.in' },
    { name: 'LNCT MCA College', url: 'https://lnctmca.in' },
    { name: 'IPS Bilaspur', url: 'https://ipsbilaspur.com' },
    { name: 'LN Ayurved College', url: 'https://lnayurvedcollege.com' },
  ]

  const schools = [
    { name: 'LNCT World School', url: 'https://lnctworldschools.com' },
  ]

  const firms = [
    { name: 'Ananjay Private Limited', url: 'https://ananjay.co.in' },
    {
      name: 'Dabra Alcobrew Private Limited',
      url: 'https://dabraalcobrew.com',
    },
    {
      name: 'Rishiraj College of Dental Sciences and Research Centre',
      url: 'https://lnctrishiraj.ac.in',
    },
    {
      name: 'Ananjay Pharmaceuticals Private Limited',
      url: 'https://ananjaypharma.co.in',
    },
    { name: 'Vitamax', url: 'https://vitamax.co.in' },
    {
      name: 'Parvati Sweetners and Power Limited',
      url: 'https://parvatisweetners.co.in',
    },
    {
      name: 'Kalchuri Contractors Ltd.',
      url: 'https://kalchuricontractors.ltd',
    },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/lnctgroupofcolleges',
      icon: 'facebook',
    },
    { name: 'Twitter', url: 'https://twitter.com/lnctgroup', icon: 'twitter' },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lnctgroupofcolleges/',
      icon: 'instagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/lnctgroup',
      icon: 'linkedin',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About LNCT Group</h3>
            <p className="text-gray-400">
              Lakshmi Narain College of Technology (LNCT) was established in
              1994 under the H.K. Kalchuri Education Trust. It has since grown
              into a prominent educational group in Central India.
            </p>
          </div>

          {/* Colleges */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Colleges</h3>
            <ul className="space-y-2">
              {colleges.map((college) => (
                <li key={college.name}>
                  <a
                    href={college.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {college.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schools</h3>
            <ul className="space-y-2">
              {schools.map((school) => (
                <li key={school.name}>
                  <a
                    href={school.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {school.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firms */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Firms</h3>
            <ul className="space-y-2">
              {firms.map((firm) => (
                <li key={firm.name}>
                  <a
                    href={firm.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {firm.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">{social.name}</span>
              {/* Replace with actual icons */}
              <i className={`fab fa-${social.icon} text-xl`}></i>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Lakshmi Narain College of Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
