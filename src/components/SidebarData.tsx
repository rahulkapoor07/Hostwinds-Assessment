import React, { ReactElement } from "react";

import { BiCubeAlt } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";
import { MdArticle } from "react-icons/md";
import { MdLuggage } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

export const SideBarData : {id : string;
  title : string;
  path : string;
  logo : ReactElement;
  subItems : string[];
  }[] = [
  {id : "1",title : "Cloud",path : "/cloud",logo : <WiCloud />, subItems : ["Servers","Dedicated Servers"]},
  {id : "2",title : "Application",path : "/application",logo : <MdArticle/>, subItems : ["Web Hosting"]},
  {id : "3",title : "Storage",path : "/storage",logo : <BiCubeAlt/>, subItems : ["Object Storage","Images","Volumes", "Backups"]},
  {id : "4",title : "Network",path : "/network",logo : <FaNetworkWired />, subItems : ["Firewalls","IPs","DNS","Load Balancers", "Monitoring"]},
  {id : "5",title : "Products",path : "/products",logo : <MdLuggage/>, subItems : ["Domains","Licenses","SSL certificates"]},
  {id : "6",title : "Account",path : "/account",logo : <VscAccount/>, subItems : ["Manage","Tickets", "Blling", "SSH keys", "API"]}
];

