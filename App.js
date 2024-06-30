import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import ListTeman from './components/ListTeman';
import ItemTeman from './components/ItemTeman.js';

const App = () => {
  const [temanTerpilih, setTemanTerpilih] = useState(null);
  const [modalTerlihat, setModalTerlihat] = useState(false);

  const teman = [
    {
      name: 'Riza Nursyah',
      description: 'ANGGOTA KELAS',
      image: require('./assets/avatar1.jpg'),
    },
        {
      name: 'Seva Andreas',
      description: 'ANGGOTA KELAS',
      image: require('./assets/avatar2.jpg'),
    },
    {
      name: 'Andra Febrian',
      description: 'ANGGOTA KELAS',
      image: require('./assets/avatar3.jpg'),
    },
  ];

  const handlePilihTeman = (teman) => {
    setTemanTerpilih(teman);
    setModalTerlihat(true);
  };

  return (
    <View style={styles.container}>
      <ListTeman
        teman={teman}
        onPilihTeman={handlePilihTeman}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTerlihat}
        onRequestClose={() => setModalTerlihat(false)}
      >
        <ItemTeman
          teman={temanTerpilih}
          onTutup={() => setModalTerlihat(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});

export default App;
