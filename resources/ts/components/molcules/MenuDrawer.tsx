import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickTodoList: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickTodoList,
    onClickUserManagement,
    onClickSetting,
    onClickLogout,
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickTodoList}>
              Todo一覧
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
            <Button w="100%" onClick={onClickLogout}>
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
