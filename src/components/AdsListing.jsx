import { Card } from 'react-bootstrap';
const jobListings = [
    {
        title: 'Разработчик веб-приложений',
        description: 'Требуется опытный разработчик для создания веб-приложений.',
        salary: '$3000 - $4000',
        city: "Минск"
    },
    {
        title: 'Менеджер по продажам',
        description: 'Компания ищет энергичного и коммуникабельного человека для работы в отделе продаж.',
        salary: '$2000 - $2500',
        city: "Минск"
    },
    {
        title: 'Дизайнер UX/UI',
        description: 'Ищем талантливого дизайнера для создания интерфейсов пользовательских приложений.',
        salary: '$2500 - $3500',
        city: "Минск"
    },
    {
        title: 'Дизайнер UX/UI',
        description: 'Ищем талантливого дизайнера для создания интерфейсов пользовательских приложений.',
        salary: '$2500 - $3500',
        city: "Минск"
    },
    {
        title: 'Дизайнер UX/UI',
        description: 'Ищем талантливого дизайнера для создания интерфейсов пользовательских приложений.',
        salary: '$2500 - $3500',
        city: "Минск"
    },
    {
        title: 'Дизайнер UX/UI',
        description: 'Ищем талантливого дизайнера для создания интерфейсов пользовательских приложений.',
        salary: '$2500 - $3500',
        city: "Минск"
    },
    
];

export const AdsListing = () => {
    return (
        <div className="row">
            {jobListings.map((job, index) => (
                <div className="col-md-4" key={index}>
                    <Card style={{ marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>{job.description}</Card.Text>
                            <Card.Text>Зарплата: {job.salary}</Card.Text>
                            <Card.Text>{job.city}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};