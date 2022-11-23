/** @type {import('next').NextConfig} //<=here end of comment 
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig */

/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
	images: {
	  loader: 'akamai',
	  path: '',
	},
	assetPrefix: './',
  };
  
  export default   nextConfig;