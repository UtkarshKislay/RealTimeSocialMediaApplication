import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modelOpened, setModelOpened }) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="55%"
        opened={modelOpened}
        onClose={() => setModelOpened(false)}
      >
        {/* Modal content */}
        <form action="infoForm">
          <h3>Your Inof</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="firstName"
              placeholder="firstName"
            />
            <input
              type="text"
              className="infoInput"
              name="lastName"
              placeholder="LastName"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="works at"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="Lives In"
              placeholder="Lives In"
            />

            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name=""
              placeholder="Realationship Status"
            />
          </div>
          <div>
            Profile Images
            <input
              type="file"
             
              name="worksAt"
              placeholder="profileimg"
            />
            CoverImage
            <input
              type="file"
             
              name="worksAt"
              placeholder="coverImg"
            />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModel;
