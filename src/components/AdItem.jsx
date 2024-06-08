import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { DELETE_AD } from "../config";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { SubmitButton } from "./SubmitButton";
import { isAdmin } from "../utils/isAdmin";
import dayjs from "dayjs";
import { Trash3 } from "react-bootstrap-icons";

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
    <Card className="mb-4">
      <Card.Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {ad.adTitle}{" "}
            {userData.email === ad.email && <small>(мое объявление)</small>}
          </div>
          <div>
            {(isAdmin(userData.roles) || userData.email === ad.email) && (
              <Button
                loading={loading}
                onClick={() => handleDelete(ad._id)}
                variant="outline-danger"
              >
                <Trash3 size={25} />
              </Button>
            )}
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong> Требования:</strong> {ad.requirements}
        </Card.Text>
        <Card.Text>
          <strong> Имя работодателя:</strong> {ad.username}
        </Card.Text>
        <Card.Text>
          <strong> Локация:</strong> {ad.city}
        </Card.Text>
        <Card.Text>
          <strong> Оплата:</strong> {ad.salary}
        </Card.Text>
        <Card.Text>
          <strong> Опубликовано:</strong> {dayjs(ad.created).fromNow()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
