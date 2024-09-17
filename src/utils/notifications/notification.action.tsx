import { notification } from "antd";

const defaultPlacement = "bottomRight";
type Placement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";

const successNotification = (
  description: string,
  placement: Placement = defaultPlacement
) => {
  notification.open({
    type: "success",
    message: "Success",
    description,
    placement,
  });
};

const infoNotification = (
  description: string,
  placement: Placement = defaultPlacement
) => {
  notification.open({ type: "info", message: "Info", description, placement });
};

const errorNotification = (
  error: any,
  placement: Placement = defaultPlacement
) => {
  notification.open({
    type: "error",
    message: "Error",
    placement,
    description: error?.response
      ? error.response.data.message
      : error?.message || error,
  });
};

export { successNotification, errorNotification, infoNotification };
