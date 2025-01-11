import React, { useState } from 'react';
import ResearchSidebar from '../components/ResearchSidebar';
import eventsData from '../data/events.json'; // Replace with your events JSON file

const EventsSummary = () => {
    const [selectedYear, setSelectedYear] = useState(null); // Track the selected year
    const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category (FDPs, Workshops, Guest Lectures)
    const [showAllEvents, setShowAllEvents] = useState(false); // Track if all events for the year should be shown
    const [showTable, setShowTable] = useState(true); // Toggle between summary table and detailed view

    // Calculate summary data for all years
    const calculateSummary = () => {
        return eventsData.events.map((yearData) => {
            const fdpCount = yearData.faculty_development_programmes.length;
            const workshopCount = yearData.workshops.length;
            const guestLectureCount = yearData.guest_lectures
                ? yearData.guest_lectures.length
                : 0;

            return {
                year: yearData.year,
                fdps: fdpCount,
                workshops: workshopCount,
                guestLectures: guestLectureCount,
            };
        });
    };

    const summary = calculateSummary();

    // Function to show all events for the selected year
    const handleShowAllEventsForYear = (year, category) => {
        setSelectedYear(year);
        setSelectedCategory(category);
        setShowAllEvents(true);
        setShowTable(false);
    };

    // Function to go back to summary table
    const handleBackToSummary = () => {
        setShowTable(true);
        setShowAllEvents(false);
        setSelectedYear(null);
        setSelectedCategory(null);
    };

    const renderSummaryTable = () => (
        <div>
            <h1>Events Summary</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Academic Year</th>
                        <th>Faculty Development Programs</th>
                        <th>Workshops</th>
                        <th>Guest Lectures</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {summary.map((row) => (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>
                                <button
                                    className="btn btn-link"
                                    onClick={() => handleShowAllEventsForYear(row.year, 'faculty_development_programmes')}
                                >
                                    {row.fdps}
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-link"
                                    onClick={() => handleShowAllEventsForYear(row.year, 'workshops')}
                                >
                                    {row.workshops}
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-link"
                                    onClick={() => handleShowAllEventsForYear(row.year, 'guest_lectures')}
                                >
                                    {row.guestLectures}
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleShowAllEventsForYear(row.year, null)}
                                >
                                    View All
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderYearDetails = () => {
        const yearData = eventsData.events.find((y) => y.year === selectedYear);
        const events = selectedCategory ? yearData[selectedCategory] : [
            ...yearData.faculty_development_programmes,
            ...yearData.workshops,
            ...(yearData.guest_lectures || []),
        ];

        return (
            <div>
                <h1>Events for {selectedYear}</h1>
                <button className="btn btn-secondary" onClick={handleBackToSummary}>
                    Back to Summary
                </button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Dates</th>
                            <th>Resource Persons</th>
                            <th>Under the Banner Of</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {selectedCategory ||
                                        (yearData.faculty_development_programmes.includes(event) && 'FDP') ||
                                        (yearData.workshops.includes(event) && 'Workshop') ||
                                        (yearData.guest_lectures?.includes(event) && 'Guest Lecture')}
                                </td>
                                <td>{event.description}</td>
                                <td>{event.dates}</td>
                                <td>{event.resource_persons}</td>
                                <td>{event.under_the_banner_of}</td>
                                <td>{event.place}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="main-page">
            <ResearchSidebar />
            <div className="main-content">
                {showTable ? renderSummaryTable() : renderYearDetails()}
            </div>
        </div>
    );
};

export default EventsSummary;
