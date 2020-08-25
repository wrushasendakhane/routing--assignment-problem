import React, { Component } from 'react';

import './Courses.css';
import { Route } from 'react-router';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectHandler = (id) => {
        const title = this.state.courses.filter(course => course.id === id).map(c => c.title);
        console.log(title)
        this.props.history.push(`/courses/${id}?title=${title}`);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article className="Course" key={course.id} onClick={() => this.courseSelectHandler(course.id)}>{course.title}</article>;
                        })
                    }
                </section>
                <section>
                    <Route path={`/courses/:id`} component={Course} />
                </section>

            </div>
        );
    }
}

export default Courses;