package com.jefferson.validador.service;

import com.jefferson.validador.dto.StudentDTO;
import com.jefferson.validador.error.ResourceNotFoundExceptions;
import com.jefferson.validador.model.Student;
import com.jefferson.validador.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService{
    @Autowired
    private StudentRepository repository;

    //LISTAR TODOS
    public List<Student> findAll(){
        return repository.findAll();
    }

    public Page<Student> findPage(int page, int size, String direction, String orderBy){
        PageRequest pageRequest = PageRequest.of(page, size, Sort.Direction.valueOf(direction), orderBy);

        return repository.findAll(pageRequest);
    }

    //ECONTRAR POR ID
    public Student find(Integer id){
        Optional<Student> student = repository.findById(id);
        return student.orElseThrow(() -> new ResourceNotFoundExceptions(
                "Object not found ID: " + id + ", tipo: " + Student.class.getName()));
    }

    public Student save(Student student){
        student.setId(null);
        return repository.save(student);
    }

    public Student update(Student student){
        find(student.getId());
        return repository.save(student);
    }

    public void delete(Integer id){
        find(id);
        try {
            repository.deleteById(id);
        } catch (ResourceNotFoundExceptions e) {
            throw new ResourceNotFoundExceptions(
                    "Impossível excluir estudante");
        }
    }

    public Student fromDTO(StudentDTO dto) {
        return new Student(dto.getNome(), dto.getIdade(), dto.getCpf(), dto.getRg(), dto.getData_nasc(),
                dto.getSigno(), dto.getMae(), dto.getPai(), dto.getEmail(), dto.getSenha(), dto.getCep(),
                dto.getEndereco(), dto.getNumero(), dto.getBairro(), dto.getCidade(), dto.getEstado(),
                dto.getTelefone_fixo(), dto.getCelular(), dto.getAltura(), dto.getPeso(), dto.getTipo_sanguineo(),
                dto.getCor());
    }



}
