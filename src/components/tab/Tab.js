import "./Tab.css";
import { useState } from "react";
import { initialTabs as tabs } from "./Category";
import { motion, AnimatePresence } from "framer-motion";

// components
import Item from "../../components/item/Item";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="tabs">
      <div className="tab___header">
        {tabs.map((item) => (
          <button
            key={item.label}
            className={item === selectedTab ? "selected" : ""}
            onClick={() => setSelectedTab(item)}
          >
            {`${item.label}`}
            {item === selectedTab ? (
              <>
                <motion.div className="underline" layoutId="underline" />
                <motion.div className="circle" layoutId="circle" />
              </>
            ) : null}
          </button>
        ))}
      </div>
      <div className="tab___content">
        <AnimatePresence mode={"wait"}>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab && selectedTab.content && (
              <>
                <div className="content___grid">
                  <div className="content01">
                    <div className="image-wrapper">
                      <img
                        src={selectedTab.content.image}
                        alt={selectedTab.content.name}
                      />
                    </div>
                    <div className="content-properties">
                      <div className="content-name">
                        <h3>{selectedTab.content.name}</h3>
                        <h3 className="price">
                          {selectedTab.content.price && (
                            <span className="naira">N</span>
                          )}
                          {selectedTab.content.price}
                        </h3>
                      </div>
                      <div className="content-decription">
                        <p>{selectedTab.content.color}</p>
                        <p>{selectedTab.content.description}</p>
                      </div>
                      <button className="add">
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                  <div className="content02">
                    <div className="image-wrapper">
                      <img
                        src={selectedTab.content.item.image}
                        alt={selectedTab.content.name}
                      />
                    </div>
                    <div className="item___details">
                      <div className="item___name">
                        <h4>{selectedTab.content.item.name}</h4>
                        <small>{selectedTab.content.item.color}</small>
                      </div>
                      <h5 className="price">
                        {selectedTab.content.item.price && (
                          <span className="naira">N</span>
                        )}
                        {selectedTab.content.item.price}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="content___items">
                  {selectedTab.content.items.map((item) => (
                    <Item
                      key={item.image}
                      color={item.color}
                      name={item.name}
                      price={item.price}
                      src={item.image}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
