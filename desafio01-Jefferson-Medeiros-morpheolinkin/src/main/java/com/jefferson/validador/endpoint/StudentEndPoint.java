package com.jefferson.validador.endpoint;

import com.jefferson.validador.dto.StudentDTO;
import com.jefferson.validador.model.Student;
import com.jefferson.validador.service.StudentService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/students")
public class StudentEndPoint {

    private final StudentService service;

    public StudentEndPoint(StudentService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    private ResponseEntity<Student> findById(@PathVariable Integer id){
        Student student = service.find(id);
        return ResponseEntity.ok().body(student);
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody StudentDTO studentDTO){ //Faz o Json ser convertido para o objeto Java
       Student obj = service.fromDTO(studentDTO);
       obj = service.save(obj);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(obj.getId())
                .toUri();
        return ResponseEntity.created(uri).build(); //Gera o código 201 created do protocolo http
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update(@RequestBody StudentDTO studentDTO, @PathVariable Integer id){
        Student obj = service.fromDTO(studentDTO);
        obj.setId(id);
        service.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<StudentDTO>> findAll(){
        List<Student> list = service.findAll();
        List<StudentDTO> dtoList = list
                .stream()
                .map(StudentDTO::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok().body(dtoList);
    }

    //Paginação
    @GetMapping(value = "/page")
    public ResponseEntity<Page<StudentDTO>> findPage(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "24") int size, //Escolhi o tamanho 24 porque é multiplo de vários números favorecendo ao front end na hora de implementar o layalt responsivo
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "orderBy", defaultValue = "name") String orderBy)
    {
        Page<Student> list = service.findPage(page, size, direction, orderBy);
        Page<StudentDTO> dtoList = list.map(StudentDTO::new);
        return ResponseEntity.ok().body(dtoList);
    }

}
