import { HistoryEntry, Tab } from "../interfaces";
import { ReactElement } from "react";
import { getFavicon } from "@raycast/utils";
import { List } from "@raycast/api";
import { VivaldiActions } from ".";

export class VivaldiListItems {
  public static TabList = TabListItem;
  public static TabHistory = HistoryItem;
}

function HistoryItem({ entry: { url, title, id } }: { entry: HistoryEntry }): ReactElement {
  return (
    <List.Item
      id={id.toString()}
      title={title}
      subtitle={url}
      icon={getFavicon(url)}
      actions={<VivaldiActions.TabHistory title={title} url={url} />}
    />
  );
}

function TabListItem(props: { tab: Tab; useOriginalFavicon: boolean }) {
  return (
    <List.Item
      title={props.tab.title}
      subtitle={props.tab.urlWithoutScheme()}
      keywords={[props.tab.urlWithoutScheme()]}
      actions={<VivaldiActions.TabList tab={props.tab} />}
      icon={props.useOriginalFavicon ? props.tab.favicon : props.tab.googleFavicon()}
    />
  );
}
