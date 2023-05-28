import { Button, Container, TextField } from '@mui/material'
import Layout from '../components/layout'

export default function Contact() {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <Layout>
      <div className="bg-gray-800 my-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap py-8 flex-col sm:flex-row p-5">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
              <img
                src="/images/ruby-roces-bw.jpg"
                alt="ceo"
                width={128}
                height={128}
              />
            </div>
            <div className="sm:pl-10 sm:pt-4 flex-1">
              <div className="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
                <div className="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
                  <h2 className="text-white text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0">
                    Dr. Ruby Roces
                  </h2>
                  <div className="flex sm:w-auto w-full sm:justify-start justify-center">
                    <span className="text-gray-400 mr-4 tracking-wider">
                      Cosmetic Surgeon
                    </span>
                  </div>
                  <div className="flex sm:w-auto sm:mt-0 mt-4 sm:mb-0 mb-2 w-full sm:justify-start justify-center">
                    <a href="#" className="text-gray-600 mr-3 hover:text-white">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 96.124 96.123"
                      >
                        <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 mr-3 hover:text-white">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 612 612"
                      >
                        <path d="M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 169.063 169.063"
                      >
                        <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" />
                        <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 leading-normal px-4 sm:px-0">
                Businesses often become known today through effective marketing.
                The marketing may be in the form of a regular news item or half
                column society news in the Sunday newspaper. The marketing may
                be in the form of a heart to heart.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-700 py-5">
          <a href="#" className="text-white mx-5">
            Tell us your concerns
          </a>
        </div>

        {/* create a tailwind Contact Us Page */}
        <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-5">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatum, quos, quas quia voluptate dolorum
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center mb-10 sm:mb-0">
                <div className="flex items-center justify-center bg-gray-800 rounded-full w-16 h-16 mb-5">
                  <svg
                    className="w-8 h-8 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z" />
                    <path d="M256 96c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64zm0 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Address
                </h2>
                <p className="text-gray-600 text-center">
                  123 Street, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
