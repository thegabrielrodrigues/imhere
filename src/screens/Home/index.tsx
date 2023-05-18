import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participantName, setParticipantName] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>(['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João']);

  function handleAddParticipant() {
    let formattedParticipantName = participantName.trim();

    if (formattedParticipantName) {
      formattedParticipantName = formattedParticipantName[0].toUpperCase() + formattedParticipantName.substring(1);

      if (participants.includes(formattedParticipantName)) {
        Alert.alert('Participante Existente', 'Já existe um participante com esse nome.');
      }
    } else {
      Alert.alert('Participante não informado', 'Insira o nome do participante para adicioná-lo à lista.');
    }
  }

  function handleRemoveParticipant(participantName: string) {
    Alert.alert('Confirmar exclusão', `Você deseja remover ${participantName}?`, [
      {
        text: 'Sim',
      },
      {
        text: 'Não',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setParticipantName(text)}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Participant name={item} onRemove={() => handleRemoveParticipant(item)} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença</Text>
        )}
      />
    </View>
  );
}
