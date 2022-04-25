import { Card } from './Card'
import { FC, useEffect, useState } from 'react'
import { StudentIntro } from '../models/StudentIntro'

const STUDENT_INTRO_PROGRAM_ID = '6wNDDbfhqyY8Nm8H2dzAPywjt2D7VKfBzKuSjE3pcgVr'

export const StudentIntroList: FC = () => {
    const [studentIntros, setStudentIntros] = useState<StudentIntro[]>([])

    useEffect(() => {
        setStudentIntros(StudentIntro.mocks)
    }, [])
    
    return (
        <div>
            {
                studentIntros.map((studentIntro, i) => <Card key={i} studentIntro={studentIntro} /> )
            }
        </div>
    )
}