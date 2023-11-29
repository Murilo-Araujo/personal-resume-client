export default function AboutMeComponent() {
    return (
        <div className="w-full h-full bg-gray-200">
            <div className="flex flex-col w-full h-full pb-12 space-y-12 px-12 overflow-x-auto overflow-y-hidden"
                 data-aos={"fade-up"}>
                <div className="flex flex-col md:flex-row w-full h-full space-y-12 md:space-y-0 md:space-x-12">
                    <div className="flex flex-col w-full h-full space-y-4">
                        <h1 className="text-4xl/[3.37rem] font-bold text-gray-800">About me</h1>
                        <p className="text-gray-700 text-lg">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            I'm a software developer, currently working at <a className="text-blue-500"
                                                                              href="https://www.avenuecode.com/">Avenue
                            Code</a> as a Full Stack Developer.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            I have a bachelor's degree in Computer Science from <a className="text-blue-500"
                                                                                   href="https://www.ufmg.br/">UFMG</a>.
                        </p>
                        <p className="text-gray-700 text-lg">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            I'm passionate about technology and I'm always looking for new challenges and learning
                            opportunities.
                        </p>
                        <p className="text-gray-700 text-lg">
                            I have experience with Java, JavaScript, TypeScript, React, Angular, Spring Boot, Node.js,
                            Docker, Kubernetes, AWS, Terraform, Jenkins, Git, and more.
                        </p>
                    </div>
                    <div className="flex flex-col w-full h-full space-y-4">
                        <h1 className="text-4xl/[3.37rem] font-bold text-gray-800">Contact</h1>
                        <p className="text-gray-700 text-lg">
                            <a className="text-blue-500" href="mailto:" target="_blank">Email</a>
                        </p>
                        <p className="text-gray-700 text-lg">
                            <a className="text-blue-500" href="https://www.linkedin.com/in/murilomm/"
                               target="_blank">LinkedIn</a>
                        </p>
                        <p className="text-gray-700 text-lg">
                            <a className="text-blue-500" href="">GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

