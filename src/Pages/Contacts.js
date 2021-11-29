import React, {Component} from 'react';

class Contacts extends Component {
  render() {
    return (
      <div style={{textAlign: "center", paddingTop: "40px"}}>
        <iframe width={'800px'} height={'500px'}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10166.419655807053!2d30.5442452!3d50.4298323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77940fa521b6fd28!2z0JLQvtC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgtC10LvQtdC60L7QvNC80YPQvdC40LrQsNGG0LjQuSDQuCDQuNC90YTQvtGA0LzQsNGC0LjQt9Cw0YbQuNC4INC40LzQtdC90Lgg0JPQtdGA0L7QtdCyINCa0YDRg9GC!5e0!3m2!1sru!2sua!4v1637396565034!5m2!1sru!2sua"
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    );
  }
}

export default Contacts;
