import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Attendance(props) {
    const takeAttendance = () => {
        console.log("take attendance");
    }
    // live clock
    const [time, setTime] = React.useState(new Date());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // end live clock


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Attendance</h2>}
        >
            <Head title="Attendance" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col space-y-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Hi {props.auth.user.name} ({time.toLocaleTimeString()})
                                    </h3>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Take attendance for the current day.{setTime}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <button onClick={takeAttendance} className="text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border-0 py-2 px-4 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700" type="button">
                                            Take Attendance
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}