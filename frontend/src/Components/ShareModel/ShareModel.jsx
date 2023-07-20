import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

function ShareModel({ modelOpened, setModelOpened }) {
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
        <PostShare/>
      </Modal>
    </>
  );
}

export default ShareModel;
