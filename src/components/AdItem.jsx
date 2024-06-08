import axios from "axios";
import { Card } from "react-bootstrap";
import { DELETE_AD } from "../config";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { SubmitButton } from "./SubmitButton";
import { isAdmin } from "../utils/isAdmin";
import dayjs from "dayjs";

export const AdItem = ({ ad, getAds }) => {
  const [loading, setLoading] = useState(false);
  const [, setErr] = useState(null);
  const { userData } = useContext(UserContext);

  const handleDelete = async (_id) => {
    try {
      setLoading(true);
      await axios.delete(DELETE_AD, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          _id: [_id],
        },
      });
      await getAds();
    } catch (err) {
      setErr(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-4">
      <Card style={{ marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>{ad.adTitle}</Card.Title>
          <Card.Text>Требования: {ad.requirements}</Card.Text>
          <Card.Text>Имя работодателя: {ad.username}</Card.Text>
          <Card.Text>Зарплата: {ad.salary}</Card.Text>
          <Card.Text>
            Тел: <a href={`tel:${ad.mobile}`}>{ad.mobile}</a>
          </Card.Text>
          <Card.Text>Локация: {ad.city}</Card.Text>
          <Card.Text>
            Опубликовано: {dayjs(ad.created).fromNow()}
          </Card.Text>
          {(isAdmin(userData.roles) || userData.email === ad.email) && (
            <SubmitButton
              type="button"
              loading={loading}
              onClick={() => handleDelete(ad._id)}
              variant="danger"
            >
              Удалить объявление
            </SubmitButton>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
