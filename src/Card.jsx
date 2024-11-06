export default function Card(props) {
    return (
        <div className="bg-[#b5d8e3] p-5 rounded-lg">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e948896757753.5eb58c727d672.png" alt="Course"
                className="w-[260px] h-[180px] mb-3"
            />
            <p className="mb-1 text-sm font-normal">UI/UX Design</p>
            <h3 className="mb-1 text-xl font-semibold">UI/UX Design for Beginners</h3>
            <p>$98</p>
            <div className="flex justify-around mt-3">
                <p>22hr 30min</p>
                <p>34 Courses</p>
                <p>250 Sales</p>
            </div>
            <div className="text-center mt-6">
                <button onClick={props.counter} className="bg-[#0D2734] text-white py-2 px-6 rounded-full text-lg hover:scale-110 transition-transform duration-300">
                    Join Course{props.number}
                </button>
            </div>
        </div>
    )
}