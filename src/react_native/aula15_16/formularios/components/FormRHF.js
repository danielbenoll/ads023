import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function FormRHF() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (values) => { alert('Sucesso!'); };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Controller control={control} name="matricula"
        rules={{
          required: { value: true, message: 'Matrícula obrigatória' }
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ padding: 10 }}
            placeholder="Matrícula"
            keyboardType="number-pad"
            value={value}
            onChangeText={texto => onChange(texto)}
          />
        )}
      />
      {errors?.matricula && (<Text style={{ color: 'red' }}>
        {errors?.matricula?.message}</Text>)}
      <Controller control={control} name="senha"
        rules={{
          required: { value: true, message: 'Senha obrigatória' },
          minLength: { value: 6, message: 'Senha menor que 6 caracteres' }
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ padding: 10 }}
            placeholder="Senha"
            secureTextEntry={true}
            value={value}
            onChangeText={texto => onChange(texto)}
          />
        )}
      />
      {errors?.senha && (<Text style={{ color: 'red' }}>
        {errors?.senha?.message}</Text>)}
      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
